import path from 'path'
import express, {Request} from 'express'
import compression from 'compression'
import serverRenderMiddleware from 'src/ssr'
import {dbConnect} from 'server/db/connect';
import bodyParser from "body-parser";
import {PUserSync} from "src/types/general";
import UserService from "server/services/userService";
import CategoryTopicService from "server/services/categoryTopicService";
import {ApiLocation} from "src/api";
import TopicService from "server/services/topicService";

const app = express()

app.use(compression())
    .use(express.static(path.resolve(__dirname, '../dist')))
    .use(express.static(path.resolve(__dirname, '../static')))

app.use([ApiLocation.USER.SUNC], bodyParser.json())
app.use([ApiLocation.FORUM], bodyParser.json())
app.use([ApiLocation.TOPICS], bodyParser.json())
app.use([ApiLocation.TOPIC], bodyParser.json())
app.post(ApiLocation.USER.SUNC, async (req: Request<PUserSync>, res) => {
    if (req.body?.login) {
        const user = await UserService.syncUser(req.body.login);
        res.send(user);
    }
    res.send('Error params');
})

app.get(ApiLocation.FORUM, async (req, res) => {
    const list = await CategoryTopicService.getAll();
    res.send(list);
})

app.post(ApiLocation.FORUM, async (req, res) => {
    if(req.body?.label){
        const category = await CategoryTopicService.createCategory(req.body.label);
        res.send(category);
    }
    res.send('Error params')

})

app.delete(ApiLocation.FORUM, async (req, res) => {
    if(req.body?.label){
        await CategoryTopicService.deleteCategoryByLabel(req.body.label);
        res.send('SUCCESS');
    }
    res.send('Error params')
})

app.get(ApiLocation.TOPICS, async (req, res)=>{
    if(req.body?.categoryId){
        const topics = await TopicService.findAllByCategory(req.body?.categoryId);
        res.send(topics)
    }
    res.send('Error params');
})
app.get(ApiLocation.TOPIC, async (req, res)=>{
    if(req.body?.categoryId && req.body?.label){
        const topic = await TopicService.createTopic(req.body?.label, req.body?.categoryId);
        res.send(topic);
    }
    res.send('Error params');
})
app.get("/service-worker.js", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "service-worker.js"))
})
app.get('/*', serverRenderMiddleware)

export {app, dbConnect}
