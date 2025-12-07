import { Component } from 'react';

interface Lesson {
    id: number;
    subject: string;
    time: string;
    room: string;
}

const INITIAL_LESSONS: Lesson[] = [
    {id: 1, subject: "Math", time: "9:00", room: "A-001"},
    {id: 2, subject: "Physics", time: "12:00", room: "B-005"},
    {id: 3, subject: "Computer Science", time: "15:00", room: "C-010"},
    {id: 4, subject: "PE", time: "17:00", room: "P"},
];

interface SchedulePageState {
    lessons: Lesson[];
}

class SchedulePage extends Component<unknown, SchedulePageState> {
    constructor(props: unknown) {
        super(props);
        this.state = {
            lessons: [],
        };
    }

    componentDidMount() {
        const storedSchedule = sessionStorage.getItem("schedule");
        if (storedSchedule) {
            try {
                const parsedSchedule: Lesson[] = JSON.parse(storedSchedule) as Lesson[];
                this.setState({lessons: parsedSchedule});
            } catch (e) {
                console.error("Failed: ", e);
                this.setState({lessons: INITIAL_LESSONS});
                sessionStorage.setItem("schedule", JSON.stringify(INITIAL_LESSONS));
            }
        } else {
            this.setState({lessons: INITIAL_LESSONS});
            sessionStorage.setItem("schedule", JSON.stringify(INITIAL_LESSONS));
        }
    }

    render() {
        const {lessons} = this.state;
        return (
            <div>
                <h2>Schedule</h2>
                {lessons.length === 0 ? (<p>No lessons</p>) :
                    (<table>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Subject</th>
                            <th>Time</th>
                            <th>Room</th>
                        </tr>
                        </thead>
                        <tbody>
                        {lessons.map(lesson => (
                            <tr key={lesson.id}>
                                <td>{lesson.id}</td>
                                <td>{lesson.subject}</td>
                                <td>{lesson.time}</td>
                                <td>{lesson.room}</td>
                            </tr>
                        ))
                        }
                        </tbody>
                    </table>)}
            </div>
        );
    }
}

export default SchedulePage;