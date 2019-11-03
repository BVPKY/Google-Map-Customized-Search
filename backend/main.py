from datetime import datetime
from flask import Flask, jsonify, request
from elasticsearch import Elasticsearch
import json

es = Elasticsearch()

app = Flask(__name__)


@app.route('/geoName/<string:name>/', methods=['GET'])
def index(name):
    # results = es.search('name:*sa*', index='geonames')
    print('Elastic Search:', es, ', name:', name)
    results = es.search(index='geonames', body={
        "query": {
    "bool": {
      "must":
        {
          "wildcard":{
            "name": "*"+name+"*"
          
          }
        }

    }
  }})
    return ''+json.dumps(results)

# @app.route('/search', methods=['POST'])
# def search(name): 
#     keyword = request.form['keyword']

#     request_body = {
#     "settings": {
#         "number_of_shards": 5,
#         "number_of_replicas": 1
#     },
#     'mappings': {
#         'examplecase': {
#             'properties': {
#                 'id': {'type': 'keyword'},
#                 'name': {'type': 'text'},
#             }
#         }
#     }
# }

#     res = es.search(index="geonames", doc_type="geoname", body=request_body)

#     return jsonify(res['hits']['hits'])

app.run(port=5000, debug=True)
