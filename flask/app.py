import os
import pickle
import tempfile

import boto3
import numpy as np
import pandas as pd
import sklearn  # pylint: disable=unused-import
import mlflow  # pylint: disable=unused-import
from flask import Flask, jsonify, request, render_template, redirect, url_for

app = Flask(__name__)

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=8000)