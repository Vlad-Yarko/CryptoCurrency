from flask import Blueprint, jsonify

from app.src.http_client import HTTPClientBinance
from app.src.symbols import symbols


router = Blueprint('crypto', __name__)


@router.route('/usdt/<path:symbol>')
async def btc_hand(symbol):
    """
    Crypto currency to USDT
    ---
    tags:
        - Crypto
    consumes:
        - application/json
    parameters:
      - name: symbol
        in: path
        type: string
        required: true
        description: Symbol of currency (without USDT)
    responses:
        200:
            description: Current price of symbol
            schema:
                type: object
                properties:
                    price:
                        type: string
                        description: latest price of the symbol
                        example: 3.60000000
                    symbol:
                      type: string
                      description: symbol that was given
                      example: TONUSDT
        422:
            description: Invalid symbol
            schema:
                type: object
                properties:
                    message:
                        type: string
                        description: error message
                        example: poop symbol is invalid
    """

    if symbol.upper() in symbols:
        data = await HTTPClientBinance().get_coin_usdt(symbol.upper())
        return jsonify(data)
    return jsonify({'message': f'{symbol} symbol is invalid'}), 422
