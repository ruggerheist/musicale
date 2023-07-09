// const newSearch = async (event) => {
//     event.preventDefault();
//     const search = document.querySelector('#search').value.trim();
//     if (search) {
//         document.location.replace(`/search/${search}`);
//     }
// };

// const deleteConcert = async (event) => {
//     event.preventDefault();

//     const concert_id = event.target.getAttribute('data-id');
//     const response = await fetch(`/api/concerts/${concert_id}`, {
//         method: 'DELETE',
//         body: JSON.stringify({ concert_id }),
//         headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//         document.location.replace('/profile');
//     } else {
//         alert('Failed to delete concert');
//     }
// };

// TO DELETE

// const addConcert = async (event) => {
//     event.preventDefault();
//     const concert_id = event.target.getAttribute('data-id');
//     const response = await fetch(`/api/concerts/${concert_id}`, {
//         method: 'PUT',
//         body: JSON.stringify({ concert_id }),
//         headers: { 'Content-Type': 'application/json' },
//     });
//     if (response.ok) {
//         document.location.replace('/profile');
//     } else {
//         alert('Failed to add concert');
//     }
// };

// const userWithConcert = await User.findAll({
//     where: {
//         id: req.session.user_id,
//     },
//     include: [
//         {
//             model: Concert,
//             through: UserConcert,
//             as: 'concerts',
//             attributes: ['id', 'artist', 'date', 'venue', 'ticket_url'],
//         },
//     ],
// });
