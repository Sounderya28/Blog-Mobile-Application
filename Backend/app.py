from flask import Flask,jsonify,request
from flask_sqlalchemy import SQLAlchemy
import datetime
from flask_marshmallow import Marshmallow

app=Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI']='mysql://root:root@localhost/main_project'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False



db=SQLAlchemy(app)
ma=Marshmallow(app)


class Blogs(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    title=db.Column(db.String(100))
    body=db.Column(db.Text())
    date=db.Column(db.DateTime,default=datetime.datetime.now)

    def __init__(self,title,body):
        self.title=title
        self.body=body

class BlogSchema(ma.Schema):
    class Meta:
        fields=('id','title','body','date')

blog_schema=BlogSchema()
blogs_schema=BlogSchema(many=True)


@app.route('/get',methods=['GET'])
def get_blogs():
    all_blogs=Blogs.query.all()
    results=blogs_schema.dump(all_blogs)
    return jsonify(results)

@app.route('/get/<id>',methods=['GET'])
def post_details(id):
    blog=Blogs.query.get(id)
    return blog_schema.jsonify(blog)


@app.route('/add',methods=['POST'])
def add_blogs():
    title=request.json['title']
    body=request.json['body']

    blogs=Blogs(title,body)
    db.session.add(blogs)
    db.session.commit()
    return blog_schema.jsonify(blogs)

@app.route('/update/<id>',methods=['PUT'])
def update_blog(id):
    blog=Blogs.query.get(id)

    title=request.json['title']
    body=request.json['body']

    blog.title=title
    blog.body=body

    db.session.commit()
    return blog_schema.jsonify(blog)

@app.route('/delete/<id>',methods=['DELETE'])
def delete_blog(id):
    blog=Blogs.query.get(id)
    db.session.delete(blog)
    db.session.commit()
    return blog_schema.jsonify(blog)

if __name__=="__main__":
    with app.app_context():
        db.create_all()
    app.run(host='192.168.0.100',port=3000,debug=True)
    



