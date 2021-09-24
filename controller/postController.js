const model = require('../models/index');
const Post = model.Post;

exports.createPost = async function (req, res) {
    try {
        const post = await Post.create({
            posts: req.body.posts,
            users_email_fkey: req.body.email,
            title: req.body.title
        })
        return res.status(200).send(post);
    } catch (error) {
        throw error;
    }
}

exports.deletePost = async function (req, res) {
    try {
        const res = await await Post.destroy({
            where: {
                users_email_fkey: req.params.email,
                id: req.body.id
            }
        });
        res.status(200).send('post deleted')
    } catch (error) {
        throw error;
    }
}

exports.updatePost = async function (req, res) {
    try {

        const user = await Post.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        return res.status(200).send('post updated');
    } catch (err) {
        throw err;
    }
}

exports.getPosts = async function (req, res) {
    try {

        const user = await Post.findAll({
            where: {
                users_email_fkey: req.params.email
            }
        });
        return res.status(200).send(user);
    } catch (err) {
        throw err;
    }
}
