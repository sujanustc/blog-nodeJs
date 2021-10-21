const slugMaker = async (data) => {
  let slug = data.toLowerCase();
  slug = slug.replace(/[^a-zA-Z ]/g, "");
  slug = slug.replace(/[ ]/g, "-");
  return slug.toString();
};

module.exports = { slugMaker };
