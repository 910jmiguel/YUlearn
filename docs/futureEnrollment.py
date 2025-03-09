import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
import plotly.graph_objects as go

yorkData = pd.read_csv("docs/YorkLassonde Data.csv")
yorkDataCopy = yorkData.copy()

yorkData["Year"] = yorkData["Year"].astype(str).apply(lambda x: int(x.split("-")[0]))

target_columns = [
    "Computer Science Enrollment", "Computer Engineering Enrollment", 
    "Computer Security Enrollment", "Software Engineering Enrollment", 
    "Electrical Engineering Enrollment"
]

yorkPredictions = []
formulas = []
predictions = []

for target in target_columns:
    X = yorkData[["Year"]].astype(int)
    y = yorkData[target]

    model = LinearRegression()
    model.fit(X, y)

    slope = model.coef_[0]
    intercept = model.intercept_
    
    formula = f"{target}: y = {slope:.2f} * Year + {intercept:.2f}"
    formulas.append(formula)
    print(formula)

    
    yorkPredictionYear = np.array([2025, 2026, 2027, 2028, 2029, 2030]).reshape(-1, 1)
    yorkPredictionTarget = model.predict(yorkPredictionYear).astype(int)
    
    prediction_years = [f"{year}-{str(year + 1)[2:]}" for year in range(2025, 2031)]
    
    prediction_data = pd.DataFrame({
        "Year": prediction_years,
        target: yorkPredictionTarget
    })
    
    predictions.append(prediction_data)

finalData = yorkData.copy()

finalData["Year"] = finalData["Year"].astype(str)

for target, pred in zip(target_columns, predictions):
    pred["Year"] = pred["Year"].astype(str)
    finalData = pd.merge(finalData, pred, on="Year", how="outer", suffixes=("", f"_{target[-1]}"))

for target in target_columns:
    finalData[target] = finalData[f"{target}_t"].fillna(finalData[target])
    finalData.drop(columns=[f"{target}_t"], inplace=True)

finalData["Year"] = finalData["Year"].apply(lambda x: f"{x}-{str(int(x) + 1)[2:]}" if x.isdigit() else x)
finalData.to_csv("docs/YorkLassonde Data Predictions.csv", index=False)