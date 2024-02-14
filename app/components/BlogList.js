import BlogPost from './BlogPost';

const blogPosts = [
  { id: 1, title: 'First Blog Post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor consequat id porta nibh venenatis cras. Molestie nunc non blandit massa. Laoreet sit amet cursus sit amet. Platea dictumst quisque sagittis purus sit amet volutpat. Urna nec tincidunt praesent semper. Adipiscing at in tellus integer feugiat scelerisque. Sapien eget mi proin sed libero enim sed. Magnis dis parturient montes nascetur. Risus pretium quam vulputate dignissim suspendisse in. Quis commodo odio aenean sed adipiscing. Nibh ipsum consequat nisl vel. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Lacus sed viverra tellus in hac habitasse platea dictumst. Feugiat in ante metus dictum at. Rhoncus mattis rhoncus urna neque viverra justo nec. Sociis natoque penatibus et magnis dis parturient montes. Amet venenatis urna cursus eget nunc. Orci a scelerisque purus semper. Ultrices gravida dictum fusce ut placerat.' },
  { id: 2, title: 'Second Blog Post', content: 'Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Vel eros donec ac odio tempor orci. Ligula ullamcorper malesuada proin libero nunc. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Mauris nunc congue nisi vitae suscipit tellus mauris a. Vestibulum morbi blandit cursus risus at ultrices. Tellus in metus vulputate eu. Netus et malesuada fames ac. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Lobortis mattis aliquam faucibus purus in. Tellus orci ac auctor augue mauris augue. In massa tempor nec feugiat nisl pretium fusce. Ultrices eros in cursus turpis massa tincidunt. Dictum sit amet justo donec. Netus et malesuada fames ac turpis egestas. Rhoncus est pellentesque elit ullamcorper. Elit duis tristique sollicitudin nibh sit. Pharetra diam sit amet nisl suscipit adipiscing.' },
];

function BlogList() {
  return (
    <div className="blog-list">
      {blogPosts.map(post => (
        <BlogPost key={post.id} title={post.title} content={post.content} />
      ))}
    </div>
  );
}

export default BlogList;
