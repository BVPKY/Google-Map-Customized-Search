from elasticsearch import helpers, Elasticsearch
import csv
import sys

csv.field_size_limit(sys.maxsize)

es = Elasticsearch()

with open('/home/darling/flask-application/backend/cities_canada-usa.csv') as f:
    reader = csv.DictReader(f)
    helpers.bulk(es, reader, index='geonames', doc_type='geoname')


