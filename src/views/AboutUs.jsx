const teamMembers = [
  {
    name: 'Bob Doe',
    role: 'Director',
    image: 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg'
  },
  {
    name: 'Mr. YoYo',
    role: 'CEO',
    image: 'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp'
  },
  {
    name: 'John Doe',
    role: 'CEO',
    image: 'https://r2.erweima.ai/imgcompressed/compressed_3cd28ff945d3870ce452fd77a10fd54c.webp'
  }
];

const AboutUs = () => {
  return (
    <div className="w-full mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4"> Our Mission </h1>
      <p className="text-lg mb-8">Our mission is to help cats find loving homes. We believe that every cat deserves a loving home and we are dedicated to helping them find one.</p>

      <h1 className="text-3xl font-bold mb-4"> Our History </h1>
      <p className="text-lg mb-8">
        Our organization was founded in 2010 by a group of cat lovers who wanted to make a difference in the lives of cats. Since then, we have helped hundreds of cats find loving homes.
      </p>

      <h1 className="text-3xl font-bold mb-6"> Our Team </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg w-full h-48 object-cover" src={member.image} alt={member.name} />
            </a>
            <div className="p-4">
              <h5 className="mb-1 text-xl font-bold text-slate-800">{member.name}</h5>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-400">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
