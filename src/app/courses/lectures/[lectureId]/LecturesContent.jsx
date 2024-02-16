export default function LecturesContent({ data }) {
  return (
    <div>
      <h1>Lectures</h1>
      {data.map((lecture) => {
        return (
          <div key={lecture.id}>
            <h3>{lecture.title}</h3>
            <p>{lecture.description}</p>
          </div>
        );
      })}
    </div>
  );
}
