from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/services')
def index():
    return render_template('services.html') #comment

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=5000)


