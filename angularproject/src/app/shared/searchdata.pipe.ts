import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'searchData'
})
export class SearchDataPipe implements PipeTransform{
    transform(input:any[], queryData:string, key:string):any[]{
        if (queryData == "" || queryData == undefined || key == undefined){
            return input
        }
        return input.filter((e) => e[key].toLowerCase().indexOf(queryData.toLowerCase()) > -1)

        // let a:string = "ABc";
        // a.toLowerCase
    }
}