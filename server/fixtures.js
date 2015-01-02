if (Posts.find().count()===0) {
	Posts.insert(
	    {
	      title: 'Dobrodosli',
	      author: 'Sacha Greif',
	      url: 'http://sachagreif.com/introducing-telescope/'
    });

	
}