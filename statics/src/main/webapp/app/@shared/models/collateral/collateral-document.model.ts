import { ParamModel } from '../public/param.model';

export class CollateralDocumentModel {
  docSelect: ParamModel;
  docSelectCode: number;
  fileSelect: FileSnippetModel;
  fileSelectString: string;
  changeFile: boolean = false;
  /**
   * Local Use
   */
  type: string;
  name: string;
}

export class FileSnippetModel {
  src: string;
  file: File;

  constructor(src: string, file: File) {
    this.src = src;
    this.file = file;
  }
}
