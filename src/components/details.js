// My details component

export default function Details() {
  return (
    <div
      class="card "
      style={{
        width: "35rem",
        margin: "10px",
        display: "inline-flex",
      }}
    >
      <div class="card-header">Students Details</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          Name: <b>Sonu Kumar</b>{" "}
        </li>
        <li class="list-group-item">
          Email:{" "}
          <a href=" ">
            <b>sonukum870@gmail.com</b>
          </a>
        </li>
        <li class="list-group-item">
          Phone:<b>7667984847</b>
        </li>
        <li class="list-group-item">
          Linkedln:
          <a
            href="https://www.linkedin.com/in/sonu-kumar-614413192/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.linkedin.com/in/sonu-kumar-614413192/
          </a>
        </li>
        <li class="list-group-item">
          Linkedln:
          <a
            href="https://github.com/Sonukum226"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/Sonukum226
          </a>
        </li>
        <li class="list-group-item">
          College: <b>Lovely Professional University</b>
        </li>
      </ul>
    </div>
  );
}
