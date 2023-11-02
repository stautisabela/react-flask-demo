from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
db = SQLAlchemy()
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///project.db"
db.init_app(app)

class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)

    def __str__(self):
        return f'{self.id} {self.content}'

def comment_serializer(comment):
    return {
        'id': comment.id,
        'content': comment.content
    }

comment1 = Comment(content='testing testing')
comment2 = Comment(content='another one')
with app.app_context():
    db.create_all()
    # db.session.add(comment1)
    # db.session.add(comment2)
    # db.session.commit()

@app.route('/api', methods=['GET'])
def index():
    return jsonify([*map(comment_serializer, Comment.query.all())])

if __name__ == '__main__':
    app.run(debug=True)