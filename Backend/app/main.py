from flask import Flask
from flasgger import Swagger
from flask_cors import CORS
from asgiref.wsgi import WsgiToAsgi
import uvicorn

from src.routers import crypto


wsgi_app = Flask(__name__)
wsgi_app.register_blueprint(
    crypto.router,
    url_prefix='/crypto'
)
swagger = Swagger(wsgi_app)
CORS(wsgi_app)


asgi_app = WsgiToAsgi(wsgi_app)


if __name__ == '__main__':
    uvicorn.run(asgi_app)
