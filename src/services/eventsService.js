const baseUrl = 'http://localhost:8000';

export function getAll() {
    return fetch(`${baseUrl}`)
        .then(res => res.json());
}

export const getOneDay = (id) => fetch(`${baseUrl}/day-${id}`).then(res => res.json());

export const create = async (events, date) => {
    let response = await fetch(`${baseUrl}/day-' + date,`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(events)
    });

    let result = await response.json();

    return result;
};
export const edit = (events, id) => {
    return fetch(`${baseUrl}/day-${id}/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(events)
    });
};

export const del = (id, eventId) => {
    return fetch(`${baseUrl}/day-${id}/${eventId}`, {
        method: 'DELETE',
    }).then(res => res.json());
};