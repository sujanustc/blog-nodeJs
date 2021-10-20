const slugMaker = async (req, res) => {
  data = req;
  let slug = data.toLowerCase();
  slug = slug.replace(/[^a-zA-Z ]/g, "");
  slug = slug.replace(/[ ]/g, "-");
  console.log(slug);
  return slug;
};

module.exports = { slugMaker };
