import { z } from "zod"
import { CoolModel } from "./models"

type CoolType = z.infer<typeof CoolModel>

export const logContents = (cool: CoolType) => {
  console.log(cool)
}
