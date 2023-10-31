from flask import Flask, render_template, request, redirect, url_for
app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    request_method = request.method
    if request.method == 'POST':
        first_name = request.form['first_name']
        return redirect(url_for('name', first_name=first_name))
    return render_template('index.html', request_method = request_method)

@app.route('/<first_name>')
def name(first_name):
    return 'Hello, {first_name}'

if __name__ == '__main__':
    app.run(debug=True)