// get all bootcamps     GET /api/v1/bootcamps    Public access
exports.getBootcamps= (req, res, next)=>{
    res.status(200).json({ success:true, msg:'Show all bootcamps' });
}

// get a single bootcamp     GET /api/v1/bootcamps/:id    Public access
exports.getBootcamp= (req, res, next)=>{
    res.status(200).json({ success:true, msg:`get bootcamp ${req.params.id}` });
}

// create a  new bootcamp     POST /api/v1/bootcamps    Private access
exports.createBootcamp= (req, res, next)=>{
    res.status(200).json({ success:true, msg:'Create a new bootcamp' });
}

// update a  bootcamp        PUT /api/v1/bootcamps/:id    Private access
exports.updateBootcamp= (req, res, next)=>{
    res.status(200).json({ success:true, msg:`update bootcamp ${req.params.id}` });
}

// delete a bootcamp    DELETE /api/v1/bootcamps/:id   Private access
exports.deleteBootcamp= (req, res, next)=>{
    res.status(200).json({ success:true, msg:`delete bootcamp ${req.params.id}` });
}