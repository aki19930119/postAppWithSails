//dummy database
// const post1 = {
//     id: 1,
//     title: 'PostTiTle 1',
//     body: 'Here is my body'
// }
// const post2 = {
//     id: 2,
//     title: 'PostTiTle 2',
//     body: 'Here is my body 2'
// }
// const post3 = {
//     id: 3,
//     title: 'PostTiTle 3',
//     body: 'Here is my body 3'
// }

// const Post = require("../models/Post")

// const allPosts = [post1,post2,post3]

module.exports = {
    //データの表示
    posts: async function(req, res) {
        try{
            const posts = await Post.find()
        res.send(posts) 
        } catch (err){
            res.serverError(err.toString())
        }
        // Post.find().exec(function(err, posts){
        //     if(err) {
        //         return res.serverError(err.toString())
        //     }
        //     res.send(posts)
        // })
    },

    //投稿の作成
    create: function(req, res) {
        const title = req.body.title
        const postBody = req.body.postBody

        Post.create({title: title, body: postBody}).exec(function(err){
            if(err) {
                return res.serverError(err.toString())
            }
            console.log("Finished creating powt object")

            return res.redirect('/home')
            // return res.end()
        })
    },

    //ID検索:呼び出し
    findById: function(req,res) {
        const postId = req.param('postId')

        const filteredPosts = allPosts.filter(p => {return p.id == postId})

        // const filteredPosts = allPosts.filter(function(p) {
        //     return p.id == postId
        // })

        if (filteredPosts.length > 0) {
            res.send(filteredPosts[0])
        } else{
            res.send('failed to find post by id:' + postId)
        }
    },

    //投稿の削除
    delete: async function(req, res) {
        const postId = req.param('postId')
        await Post.destroy({id: postId})
        res.send('Finished deleting post')
    }
} 