from flask import Flask, render_template, request
from flask_cors import CORS

red = 0
green = 0
blue = 0
state_curtain = 2
state_light = 1

app = Flask(__name__)
CORS(app)

# 首頁
@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        return '123456'
    else:
        return render_template('index.html')

#  氣氛燈
@app.route('/light', methods=['GET', 'POST'])
def light():
    global state_light

    if request.get_json() != None:
        state_light = request.get_json()

    if request.method == 'POST':
        print(request.get_json())
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
            print('color is changing')
            return state_light
    else:
        return 'nothing happens'
# color
@app.route('/red', methods=['GET', 'POST'])
def red_0():
    global red
    if request.get_json() != None:
        red = request.get_json()
        print(red)
        return "John China"
    else:
        return "nothing"

@app.route('/green', methods=['GET', 'POST'])
def green_0():
    global green
    if request.get_json() != None:
        green = request.get_json()
        print(green)
        return "John China"
    else:
        return "nothing"

@app.route('/blue', methods=['GET', 'POST'])
def blue_0():
    global blue
    if request.get_json() != None:
        blue = request.get_json()
        print(blue)
        return "John China"
    else:
        return "nothing"

@app.route('/color', methods=['GET', 'POST'])
def color():
    global red
    global blue
    global green
    if request.method == 'POST':
        color = red + "," + green + "," + blue
        print(color)
        return color
    else:
        return 'John China'   

# 窗簾動作
@app.route('/curtain', methods=['GET', 'POST'])
def curtain():
    global state_curtain
    
    if request.get_json() != None:
        state_curtain = request.get_json()

    if request.method == 'POST':
        print(request.get_json())
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