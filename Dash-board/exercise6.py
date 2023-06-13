import dash
import pandas as pd
import plotly.express as px
from dash import Dash, Input, Output, callback, dcc, html

data = pd.read_csv("https://raw.githubusercontent.com/allisonhorst/palmerpenguins/main/inst/extdata/penguins_raw.csv")

app = Dash(__name__)

app.layout = html.Div([
    html.H1(children="Penguin's Species and Flipper Length", style={'textAlign':'center'}),
    html.P(children="Name: Uddam Chea"),
    html.P(children="Date: 05/09/23"),
    html.P(children="Assignment: Exercise6"),
    dcc.Dropdown(data.Species.unique(), [], id='dropdown-selection', multi=True, placeholder="Select specie(s)"),
    dcc.Graph(id='graph-content'),
    html.P(children="Observation: We can see that there is a clear distinction in Flipper Length between the species Adelie and Gentoo. Gentoo penguins seem to have larger flippers. The size of their flippers is also positively correlated to their body mass. However, there is no distinct grouping for Chinstrap species.")
])

@callback(
    Output('graph-content', 'figure'),
    Input('dropdown-selection', 'value')
)

def update_graph(value):
    dff = data[(data['Species'].isin(value))]
    return px.scatter(dff, x='Flipper Length (mm)', y='Body Mass (g)', color="Species")

if __name__ == "__main__":
    app.run_server(debug=True)