# from typing import Text
from flask import Flask, render_template, url_for, request, redirect
# from flask_sqlalchemy import SQLAlchemy
# from datetime import datetime
from flask_cors import CORS

state_curtain = 2
state_light = 1

app = Flask(__name__)
CORS(app)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
# db = SQLAlchemy(app)



# class Todo(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     content = db.Column(db.String(200), nullable=False)
#     date_created = db.Column(db.DateTime, default=datetime.utcnow)

#     def __repr__(self):
#         return '<Task %r>' % self.id


@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        # monkey = request.get_json()
        # print(monkey)
        # task_content = request.form['content']
        # new_task = Todo(content=task_content)

        # try:
        #     db.session.add(new_task)
        #     db.session.commit()
        #     return redirect('/')
        # except:
        #     return 'There was an issue adding your task'
        return '123456'
    else:
        # tasks = Todo.query.order_by(Todo.date_created).all()
        return render_template('index.html')

#  氣氛燈
@app.route('/light', methods=['GET', 'POST'])
def light():
    global state_light

    if request.get_json() != None:
        state_light = request.get_json()

    if request.method == 'POST':
        print(request.get_json())
        print('to light')
        if state_light == 1:
            print('open')
            return '1'
        if state_light == 2:
            print('close')
            return '2'
        if state_light == 3:
            print('party')
            return '3'
        if state_light == 4:
            print('sleep')
            return '4'
        if state_light == 5:
            print('study')
            return '5'
        if state_light == 6:
            print('relax')
            return '6'
        else:
            return '123'
    else:
        return 'nothing happens'

# 窗簾動作
@app.route('/curtain', methods=['GET', 'POST'])
def curtain():
    global state_curtain
    
    if request.get_json() != None:
        state_curtain = request.get_json()

    if request.method == 'POST':
        print(request.get_json())
        print('to curtain')
        if state_curtain == 1:
            print('open')
            return '1'
        if state_curtain == 2:
            print('close')
            return '2'
        else:
            return '123'
    else:
        return 'nothing happens'

# 切換頁面
@app.route('/curtain_html', methods=['GET', 'POST'])
def curtain_html():

    if request.method == 'POST':
        return '2'
    else:
        return render_template('curtain.html')

@app.route('/light_html', methods=['GET', 'POST'])
def light_html():

    if request.method == 'POST':
        return '32'
    else:
        return render_template('light.html')


# 執行網站
if __name__ == "__main__":
    app.run(debug=True,host='0.0.0.0',port=8000)