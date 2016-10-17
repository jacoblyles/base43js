# Base 43

Try it live at [electrum43.org](http://electrum43.org/)

The Electrum bitcoin wallet uses a custom base 43 encoding on data before it is displayed as a QR code. See the "base_encode" function here:

https://github.com/spesmilo/electrum/blob/master/lib/bitcoin.py

 If you used a QR reader to transfer data from electrum off of a machine, you need to be able to transform that into a hex string before bitcoin will know what to do with it. This project offers a webpage and a js library that will decode the Electrum base 43 format. 

 For example, if the QR code you read was a transaction that you signed on an offline airgapped machine, after using this project to decode it you could use blockchain.info to [decode the hex data](https://blockchain.info/decode-tx) or [broadcast the transaction](https://blockchain.info/pushtx)
