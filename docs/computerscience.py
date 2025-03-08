import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
import plotly.graph_objects as go

yorkData = pd.DataFrame("data/YorkCS Data.csv")

yorkData["Year"] = yorkData["Year"].apply(lambda x: int(x.split("-")[0]))

X = yorkData[["Year"]]  
y = yorkData["Enrollment"] 

model = LinearRegression()
model.fit(X, y)
future_years = np.array([2025, 2026, 2027, 2028, 2029, 2030]).reshape(-1, 1)
future_predictions = model.predict(future_years)
yorkData.to_csv("computerscience.csv", index=False)


future_data = pd.DataFrame({
    "Year": future_years.flatten(),
    "Enrollment": future_predictions
})


combined_data = pd.concat([yorkData[["Year", "Enrollment"]], future_data], ignore_index=True)

combined_data.to_csv("computersciencePredicted.csv", index=False)