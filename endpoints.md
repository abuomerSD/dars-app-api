# End Points:

## Lectures End Points (المحاضرة):

#### /api/v1/lectures/
- GET: get All lectures
- POST: save new lecture to the database

#### /api/v1/lectures/{id}
- GET: get the lecture data
- DELETE: delete the lecture
- PUT: update the lecture data

#### /api/v1/lectures?name={name}
- GET: get lecture by name (filter by name)

## Lecturers End Points (المحاضر \ الشيخ):

#### /api/v1/lecturers/
- GET: get All lecturers
- POST: save new lecturer to the database

#### /api/v1/lecturers/{id}
- GET: get the lecturer data
- DELETE: delete the lecturer
- PUT: update the lecturer data

#### /api/v1/lecturers?name={name}
- GET: get lecturer by name (filter by name)