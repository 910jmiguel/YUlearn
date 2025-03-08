import pandas as pd
import plotly.graph_objects as go

yorkData = pd.read_csv("data/YorkData.csv")
yorkData.columns = yorkData.columns.str.strip()
yorkData = yorkData.T
yorkData.columns = yorkData.iloc[0]
yorkData = yorkData[1:]
yorkData.reset_index(inplace=True)
yorkData.columns = ['Category'] + list(yorkData.columns[1:])
yorkData_long = yorkData.melt(id_vars="Category", var_name="Year", value_name="Value")

print(yorkData.index)
fig = go.Figure()

for category in yorkData_long["Category"].unique():
    df_subset = yorkData_long[yorkData_long["Category"] == category]
    fig.add_trace(go.Bar(
        name=category,
        x=df_subset["Year"],
        y=df_subset["Value"]
    ))

fig.update_layout(
    barmode="stack",
    title="Stacked Bar Chart of York Enrollment Data by Year (source: https://www.yorku.ca/oipa/quick-facts/undergraduate-student-headcount/)",
    xaxis_title="Year",
    yaxis_title="Student population",
    font=dict(
        family="Avenir, sans-serif", 
    )
)

fig.show()

fig.write_image("stacked_bar_chart.pdf", scale=2)
