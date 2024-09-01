import { Schema } from "@modules/dataset/domain/core"
import { CardHeader, Field } from "./components"
import { useSchemaCard } from "./hooks"
import clsx from "clsx"

export interface CardProps {
  schema: Schema
}

interface Props {
  id: string
  data: CardProps
}

export default function SchemaCard({ data: { schema } }: Props) {
  const {
    handleEditSchema,
    handleDeleteSchema,
    handleCreateSchema,
    handleClickCard,
    handleCloneSchema,
    selected,
    handleAddField,
  } = useSchemaCard({
    schema: schema,
  })

  const CLASS = clsx(
    "flex flex-col",
    "rounded",
    "bg-scale-4",
    "cursor-grab",
    "stroke-white",
    "text-white",
    "relative",
    // "animate-jump-in animate-once animate-duration-400 animate-ease-in-out",

    { "outline outline-[2px] outline-purple-6": selected },
  )

  return (
    <article className={CLASS} id={schema.id} onClick={handleClickCard}>
      <CardHeader
        handleDeleteSchema={handleDeleteSchema}
        handleEditSchema={handleEditSchema}
        handleExportSchema={handleCreateSchema}
        name={schema.name}
        limit={schema.limit}
        nameId={schema.slug}
        handleCloneSchema={handleCloneSchema}
        handleAddField={handleAddField}
      />

      <div className="flex flex-col gap-y-0.5 min-w-[230px] py-1.5">
        {schema.nodes.map((field, i) => (
          <Field
            key={i}
            field={field}
            schemaHasKeys={schema.hasKeyField()}
            margin={0}
            schemaId={schema.id}
            parentfieldId={schema.id}
          />
        ))}
      </div>
    </article>
  )
}
