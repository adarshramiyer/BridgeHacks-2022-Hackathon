import nltk
from nltk.stem.lancaster import LancasterStemmer
stemmer = LancasterStemmer()

import numpy
import tflearn
import tensorflow
import random
import json

# Load the json file
with open("chat_bot_train.json") as file:
    data = json.load(file)

# Tokenize the training data
words = []
labels = []
docs = []

for intent in data["intents"]:
    for pattern in intent["patterns"]:
        words.extend(nltk.word_tokenize(pattern))
        docs.append(pattern)

        if intent["tag"] not in labels:
            labels.append(intent["tag"])
