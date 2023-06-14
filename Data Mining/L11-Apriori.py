#!/usr/bin/env python
# coding: utf-8

# In[7]:


'''
Different statistical algorithms have been developed to implement association rule mining, and Apriori is one such 
algorithm. In this article we will study the theory behind the Apriori algorithm.

Theory of Apriori Algorithm
There are three major components of Apriori algorithm:

Support
Confidence
Lift
We will explain these three concepts with the help of an example.

Suppose we have a record of 1 thousand customer transactions, and we want to find the Support, Confidence, and Lift 
for two items e.g. burgers and ketchup. Out of one thousand transactions, 100 contain ketchup while 150 contain a 
burger. Out of 150 transactions where a burger is purchased, 50 transactions contain ketchup as well. Using this data,
we want to find the support, confidence, and lift.

***Support***
Support refers to the default popularity of an item and can be calculated by finding number of transactions 
containing a particular item divided by total number of transactions. Suppose we want to find support for item B. 
This can be calculated as:

Support(B) = (Transactions containing (B))/(Total Transactions)  
For instance if out of 1000 transactions, 100 transactions contain Ketchup then the support for item Ketchup can be 
calculated as:
Support(Ketchup) = (Transactions containingKetchup)/(Total Transactions)
Support(Ketchup) = 100/1000  
                 = 10%
***Confidence***
Confidence refers to the likelihood that an item B is also bought if item A is bought. It can be calculated by finding
the number of transactions where A and B are bought together, divided by total number of transactions where A is 
bought. Mathematically, it can be represented as:

Confidence(A→B) = (Transactions containing both (A and B))/(Transactions containing A)  
Coming back to our problem, we had 50 transactions where Burger and Ketchup were bought together. While in 150 
transactions, burgers are bought. Then we can find likelihood of buying ketchup when a burger is bought can be 
represented as confidence of Burger -> Ketchup and can be mathematically written as:

Confidence(Burger→Ketchup) = (Transactions containing both (Burger and Ketchup))/(Transactions containing A)
Confidence(Burger→Ketchup) = 50/150  
                           = 33.3%
You may notice that this is similar to what you'd see in the Naive Bayes Algorithm, however, the two algorithms are meant for different types of problems.

***Lift***
Lift(A -> B) refers to the increase in the ratio of sale of B when A is sold. Lift(A –> B) can be calculated by 
dividing Confidence(A -> B) divided by Support(B). Mathematically it can be represented as:
Lift(A→B) = (Confidence (A→B))/(Support (B))  
Coming back to our Burger and Ketchup problem, the Lift(Burger -> Ketchup) can be calculated as:

Lift(Burger→Ketchup) = (Confidence (Burger→Ketchup))/(Support (Ketchup))

Lift(Burger→Ketchup) = 33.3/10  
                     = 3.33
Lift basically tells us that the likelihood of buying a Burger and Ketchup together is 3.33 times more than the 
likelihood of just buying the ketchup. A Lift of 1 means there is no association between products A and B. Lift of 
greater than 1 means products A and B are more likely to be bought together. Finally, Lift of less than 1 refers to 
the case where two products are unlikely to be bought together.
'''


# In[9]:


'''
Import libraries
'''
import numpy as np  
import matplotlib.pyplot as plt  
import pandas as pd
from apyori import apriori


# In[14]:


'''
Import data
'''
store_data = pd.read_csv('store_data.csv', header=None)  
store_data.head() 


# In[15]:


store_data.head()


# In[17]:


store_data.shape


# In[18]:


'''
The Apriori library we are going to use requires our dataset to be in the form of a list of lists, where the whole 
dataset is a big list and each transaction in the dataset is an inner list within the outer big list. Currently we 
have data in the form of a pandas dataframe. To convert our pandas dataframe into a list of lists, execute the 
following script:
'''
records = []  
for i in range(0, 7501):  
    records.append([str(store_data.values[i,j]) for j in range(0, 20)])


# In[19]:


'''
The next step is to apply the Apriori algorithm on the dataset. To do so, we can use the apriori class that we 
imported from the apyori library.

The apriori class requires some parameter values to work. The first parameter is the list of list that you want to 
extract rules from. The second parameter is the min_support parameter. This parameter is used to select the items 
with support values greater than the value specified by the parameter. Next, the min_confidence parameter filters 
those rules that have confidence greater than the confidence threshold specified by the parameter. Similarly, the
min_lift parameter specifies the minimum lift value for the short listed rules. Finally, the min_length parameter 
specifies the minimum number of items that you want in your rules.

Let's suppose that we want rules for only those items that are purchased at least 5 times a day, or 7 x 5 = 35 times 
in one week, since our dataset is for a one-week time period. The support for those items can be calculated as 35/7500
= 0.0045. The minimum confidence for the rules is 20% or 0.2. Similarly, we specify the value for lift as 3 and 
finally min_length is 2 since we want at least two products in our rules. These values are mostly just arbitrarily 
chosen, so you can play with these values and see what difference it makes in the rules you get back out.
'''
association_rules = apriori(records, min_support=0.0045, min_confidence=0.2, min_lift=3, min_length=2)  
association_results = list(association_rules)  


# In[22]:


'''
Viewing the Results
Let's first find the total number of rules mined by the apriori class. 
'''
print(len(association_results))


# In[25]:


'''
Let's print the first item in the association_rules list to see the first rule.
'''
print(association_results[0]) 


# In[26]:


'''
The first item in the list is a list itself containing three items. The first item of the list shows the grocery items
in the rule.

For instance from the first item, we can see that light cream and chicken are commonly bought together. This makes 
sense since people who purchase light cream are careful about what they eat hence they are more likely to buy chicken 
i.e. white meat instead of red meat i.e. beef. Or this could mean that light cream is commonly used in recipes for 
chicken.

The support value for the first rule is 0.0045. This number is calculated by dividing the number of transactions 
containing light cream divided by total number of transactions. The confidence level for the rule is 0.2905 which 
shows that out of all the transactions that contain light cream, 29.05% of the transactions also contain chicken. 

Finally, the lift of 4.84 tells us that chicken is 4.84 times more likely to be bought by the customers who buy light
cream compared to the default likelihood of the sale of chicken.
'''


# In[27]:


'''
The following script displays the rule, the support, the confidence, and lift for each rule in a more clear way:
'''
for item in association_results:

    # first index of the inner list
    # Contains base item and add item
    pair = item[0] 
    items = [x for x in pair]
    print("Rule: " + items[0] + " -> " + items[1])

    #second index of the inner list
    print("Support: " + str(item[1]))

    #third index of the list located at 0th
    #of the third index of the inner list

    print("Confidence: " + str(item[2][0][2]))
    print("Lift: " + str(item[2][0][3]))
    print("=====================================")


# In[28]:


'''
We have already discussed the first rule. Let's now discuss the second rule. The second rule states that 
mushroom cream sauce and escalope are bought frequently. The support for mushroom cream sauce is 0.0057. 
The confidence for this rule is 0.3006 which means that out of all the transactions containing mushroom, 
30.06% of the transactions are likely to contain escalope as well. Finally, lift of 3.79 shows that the 
escalope is 3.79 more likely to be bought by the customers that buy mushroom cream sauce, compared to its 
default sale.
'''


# In[29]:


'''
Association rule mining algorithms such as Apriori are very useful for finding simple associations between our data 
items. They are easy to implement and have high explain-ability. However for more advanced insights, such those used 
by Google or Amazon etc., more complex algorithms, such as recommender systems, are used. However, you can probably 
see that this method is a very simple way to get basic associations if that's all your use-case needs.
'''


# In[ ]:




