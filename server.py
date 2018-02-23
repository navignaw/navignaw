from flask import Flask, make_response, redirect, send_file, url_for
import os


app = Flask(__name__)
if 'HEROKU' in os.environ: # Production mode
    pass # do nothing
else:
    app.debug = True


# Routing
def loadHtml(path):
    if app.debug: # Development: send uncached
        return make_response(open(path).read())
    return send_file(path)


@app.route('/')
def index():
    return loadHtml('templates/index.html')

@app.route('/projects/<project>')
def projects(project):
    return redirect(url_for('index', _anchor='/projects/' + project))

@app.route('/partials/<partial>', methods=['GET'])
def getPartial(partial):
    return loadHtml('static/partials/' + partial)


if __name__ == "__main__":
    app.run(host='0.0.0.0')
