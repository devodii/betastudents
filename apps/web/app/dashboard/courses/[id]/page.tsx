import { getOutline } from "../../../../actions/courses";

interface Props {
  params: {
    id: string;
  };
}
export default async function CourseIDPage({ params }: Props) {
  const outline = await getOutline(params.id);

  return (
    <div>
      <p className="text-lg font-medium text-gray-900">{outline?.title}</p>
      <div className="text-gray-700">{outline.content}</div>
    </div>
  );
}
