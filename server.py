from flask import Flask, render_template, request, jsonify
import os


app = Flask(__name__)
if 'HEROKU' in os.environ: # Production mode
    pass # do nothing
else:
    app.debug = True


@app.route('/')
def index():
    return render_template('index.html')


#@app.route('/directory', methods=['GET'])
#def getDirectoryJSON():
#    return jsonify(dirData.getJSON())

#@app.route('/directory/<dirname>', methods=['POST'])
#def makeDirectory(dirname=None):
#    if dirname and dirData.mkdir(dirname):
#        return getDirectoryJSON()
#
#    return jsonify({
#        "success": False,
#        "error": "Invalid request"
#    })


if __name__ == "__main__":
    app.run(host='0.0.0.0')

