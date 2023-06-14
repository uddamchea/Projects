# -*- coding: utf-8 -*-
"""
Created on Sat Dec 22 10:59:44 2018

@author: sshad
"""

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sb
import scipy.stats as stat

#defined file path
url="https://archive.ics.uci.edu/ml/machine-learning-databases/autos/imports-85.data"
#everything in file
df=pd.read_csv(url)
#Without header
dfwh=pd.read_csv(url,header= None )
#add headers in list
headers=["symboling","normalized-losses","make","fuel-type","aspiration","num-of-doors","body-style","drive-wheels",
         "engine-location","wheel-base","length","width","height","curb-weight","engine-type","num-of-cylinders",
         "engine-size","fuel-system","bore","stroke","compression-ratio","horsepower","peak-rpm","city-mpg","highway-mpg","price"]
#assign list of header as data frame column names
dfwh.columns=headers
#prints dataframe attributes data types in series
print(dfwh.dtypes)
#Statistical analysis of data distribution
print(dfwh.describe())
#for all attributes including non numeric
print(dfwh.describe(include="all"))
#It describes top to and bottom 30 rows each for sample
print(dfwh.info)
print(dfwh)

dfwh["price"].replace("?","0",inplace=True)
dfwh["price"]=pd.to_numeric(dfwh["price"])
dfwh["horsepower"].replace("?","0",inplace=True)
dfwh["horsepower"]=pd.to_numeric(dfwh["horsepower"])

#*************************************************************************
#******************* Exploratory data analysis ***************************
#*************************************************************************
#Descrptive statistics
#describe for numeric values
dfwh.describe()
#values_counts for categorical attributes
drive_wheels_count=dfwh["drive-wheels"].value_counts()
drive_wheels_count.rename(colunms={'drive-wheels':'value_counts'}, inplace=True)
drive_wheels_count.index.name='drive-wheels'
print(drive_wheels_count)
#boxplots
#sb.boxplot(x="drive-wheels",y="price",data=dfwh)
#scatterplto
#sb.regplot(x="engine-size", y="price", data=dfwh)

#Grouping of data and visualizationa as table
dftmp=dfwh[['body-style','drive-wheels','price']]
df_grp=dftmp.groupby(['drive-wheels','body-style'],as_index=False).mean()
print(df_grp)

#Grouping of data and visualizationa as pivot table
df_pivot=df_grp.pivot(index='drive-wheels',columns='body-style')
print(df_pivot)

#Heat map for pivot table
plt.pcolor(df_pivot, cmap='RdBu')
plt.colorbar()
plt.show()

#ANOVA
plt.bar(dfwh["make"],dfwh["price"], align='center', alpha=0.5)
plt.ylabel('Price')
plt.title('Brands')
plt.ion()
plt.show()

grouped_test2=dftmp[['drive-wheels','price']].groupby(['drive-wheels'])
f_val, p_val = stat.f_oneway(grouped_test2.get_group('fwd')['price'], grouped_test2.get_group('rwd')['price'], grouped_test2.get_group('4wd')['price'])  
print( "ANOVA results: F=", f_val, ", P =", p_val)   
f_val, p_val = stat.f_oneway(grouped_test2.get_group('fwd')['price'], grouped_test2.get_group('rwd')['price'])  
print( "ANOVA results: F=", f_val, ", P =", p_val )


#Pearson coefficient
pearson_coef, p_value = stat.pearsonr(dfwh['horsepower'], dfwh['price'])
print("The Pearson Correlation Coefficient is", pearson_coef, " with a P-value of P =", p_value) 

print("This is correlation")
print(dfwh.corr())

