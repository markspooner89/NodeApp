const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

const publicFolder = path.join(__dirname, "../public");
const viewsFolder = path.join(__dirname, "../templates/views");
const partialsFolder = path.join(__dirname, "../templates/components");

app.set("view engine", "hbs");
app.set("views", viewsFolder);
hbs.registerPartials(partialsFolder);
app.use(express.static(publicFolder))

const memberService = require("./services/memberService");

app.get("", (_, res) => { 
    res.render("members", { 
        "pageTitle": "Members"
    });
});

app.get("/member/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const member = memberService.getMember(id);
    res.render("member", { 
        "pageTitle": "Member",
        "member": member
    });
});

app.get("/api/members", (_, res) => { 
    setTimeout(() => {
        const members = memberService.getMembers();
        res.send(members);
    }, 1000)
 
});

app.get("/api/member/:id", (req, res) => { 
    const id = parseInt(req.params.id);
    const member = memberService.getMember(id);
    res.send(member);
});

app.listen(3000, () => { 
   console.log("server is running!"); 
});