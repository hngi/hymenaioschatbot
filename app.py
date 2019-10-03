import os, bot
from flask import Flask, render_template, url_for, redirect, request, make_response

app = Flask(__name__)

@app.route("/")
def index():
	return render_template("index.html")

@app.route("/chatbot")
def chatbot():
	session = bot.SessionID()
	session_id = str(session.generate())
	resp = make_response(render_template("chat.html", sessionid=session_id))
	resp.set_cookie('session', session_id)
	return resp

@app.route("/gallery")
def gallery():
	return render_template("gallery.html")

@app.route("/about")
def about():
	return render_template("about.html")

@app.route("/how_it_works")
def how_it_works():
	return render_template("how_it_works.html")

@app.route("/reply")
def reply():
	msg = request.args.get('message', '')
	session = request.cookies.get('session')
	reply = bot.get_reply(msg, int(session))
	return reply

if __name__ == "__main__":
	app.run()
