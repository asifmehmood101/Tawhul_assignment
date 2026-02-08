import { useState } from "react";
import { CardWithContent } from "@/components/ui/CardWithContent";
import { FormField } from "@/components/ui/FormFiled";
import { CommentItem } from "./CommentItem";
import { SendIcon } from "@/assets/icons";

type Comment = {
  id: string;
  author: string;
  message: string;
  date: string;
};

type CommentsSectionProps = {
  comments: Comment[];
  onSubmit?: (message: string) => void;
};

export const CommentsSection = ({
  comments,
  onSubmit
}: CommentsSectionProps) => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value.trim()) return;
 
    onSubmit?.(value);
    setValue("");
  };
  

  return (
    <CardWithContent title="Comments">
      <div className="flex flex-col gap-4">
        {/* Comment List */}
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            author={comment.author}
            message={comment.message}
            date={comment.date}
          />
        ))}

        {/* Input Area */}
        <div className="mt-4 flex flex-col gap-4">
          <FormField
            as="textarea"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Write a comment..."
          />

          <div>
            <button
              onClick={handleSubmit}
              className="
                inline-flex items-center gap-2
                bg-[#1D3557]
                text-white
                px-5 py-2.5
                rounded-xl
                text-sm
                font-medium
                hover:bg-[#0F172A]
                transition
              "
            >
              <SendIcon size={16} color="white" />
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </CardWithContent>
  );
};
