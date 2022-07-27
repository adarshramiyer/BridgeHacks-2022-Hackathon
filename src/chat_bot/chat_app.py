from email import message
from flask import Flask, render_template, request, jsonify
from flask_restful import Api, Resource

from chat_bot import chat

#nltk.download("punkt") 

#app = Flask(__name__)
#api = Api(app)


#api.add_resource(chat, '/<string:query>')

@app.get("/")
def index_get():
    return render_template('base.html')

@app.post("/predict")
def predict():
    text = request.get_json().get("message")
    # TODO: check if text is valified
    response = chat(text)
    message = {"answer": response}
    return jsonify(message)

if __name__ == "__main__":
    app.run(debug = True)