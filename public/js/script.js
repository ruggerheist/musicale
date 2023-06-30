const newSaveHandler = async (event) => {
    event.preventDefault();
    const search = document.querySelector('#search').value.trim();
    if (search) {
        document.location.replace(`/search/${search}`);
    }
};

const newAddHandler = async (event) => {
    event.preventDefault();
    const concert_id = event.target.getAttribute('data-id');
    const response = await fetch(`/api/concerts/${concert_id}`, {
        method: 'PUT',
        body: JSON.stringify({ concert_id }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/profile');
    } else {
        alert('Failed to add concert');
    }
};

const newDeleteHandler = async (event) => {
    event.preventDefault();
    const concert_id = event.target.getAttribute('data-id');
    const response = await fetch(`/api/concerts/${concert_id}`, {
        method: 'DELETE',
        body: JSON.stringify({ concert_id }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/profile');
    } else {
        alert('Failed to delete concert');
    }
};

document
    .querySelector('')
    .addEventListener('submit', newSaveHandler);

document
    .querySelector('')
    .addEventListener('submit', newAddHandler);

document
    .querySelector('')
    .addEventListener('submit', newDeleteHandler);
