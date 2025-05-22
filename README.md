# School Management API

A Node.js + Express project with Neon (PostgreSQL) that allows:

- Adding new schools (`/addSchool`)

`localhost:3000/addSchool ` -- to add school route  
sample data : -
`
{
  "name": "Sunrise High School",
  "address": "123 Main Street",
  "latitude": 12.9716,
  "longitude": 77.5946
}`

response :- 
`
{
    "message": "School added successfully"
}`

- Listing schools sorted by distance (`/listSchools`)
`http://localhost:3000/listSchools?lat=13.9716&lng=72.453`  --- to see school route
response :-
`[
    {
        "id": 1,
        "name": "Sunrise High School",
        "address": "123 Main Street",
        "latitude": 12.9716,
        "longitude": 77.5946,
        "distance": 5.237943352118268
    }
]`

## How to Run

1. Clone the repo
2. Install dependencies:
