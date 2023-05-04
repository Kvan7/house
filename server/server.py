from flask import Flask, request, jsonify

app = Flask(__name__)

# Test API route


@app.route('/api/test', methods=['GET'])
def test():
    return jsonify({'message': 'API is working!'})


if __name__ == '__main__':
    app.run(debug=True)
