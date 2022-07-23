import nltk
from nltk.stem.lancaster import LancasterStemmer
stemmer = LancasterStemmer()

import numpy
import tflearn
import tensorflow
import random
import json

#Load the json file
with open("chat_bot_train.json") as file:
    data = json.load(file)

