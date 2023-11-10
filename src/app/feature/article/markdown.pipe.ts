import { Pipe, PipeTransform } from "@angular/core";
import * as marked from "marked";

interface CustomMarkedOptions extends marked.MarkedOptions {
  sanitize?: boolean;
}

@Pipe({
  name: "markdown",
  standalone: true,
})
export class MarkdownPipe implements PipeTransform {
  async transform(content: string): Promise<string> {
    const { marked } = await import("marked");
    const options: CustomMarkedOptions = { sanitize: true };
    return marked (content, options);
  }
}

