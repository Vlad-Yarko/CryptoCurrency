from aiohttp import ClientSession
from async_lru import alru_cache


class HTTPClient:
    def __init__(self, base_url: str, endpoint='', params=None):
        self.base_url = base_url
        self.endpoint = endpoint
        self.params = params
        self.session = ClientSession(
            base_url=self.base_url
        )


class HTTPClientBinance(HTTPClient):
    def __init__(self):
        super().__init__(
            base_url='https://api.binance.com/api/v3/'
        )

    @alru_cache
    async def get_coin_usdt(self, symbol: str) -> dict:
        self.endpoint = 'ticker/price'
        self.params = {
            'symbol': symbol + 'USDT'
        }
        async with self.session.get(
            url=self.endpoint,
            params=self.params
        ) as response:
            data = await response.json()
        return data
