import * as express from 'express';
import * as morgan from 'morgan';
import * as path from 'path';

const app = express();

app.use(morgan('tiny'));

const publicPath = path.resolve('dist/public');
app.use("/public", express.static(publicPath));
app.get("*", function(req, res) {
    res.sendFile(path.join(publicPath, "index.html"));
});

const port = 3000;
app.listen(port, () => {
   console.log(`Server listening on port ${port}!`);
});