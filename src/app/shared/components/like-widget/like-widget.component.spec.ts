import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LikeWidgetComponent } from "./like-widget.component";
import { LikeWidgetModule } from "./like-widget.module";

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;

  beforeEach(async ()=> {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule]

    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
  })

  it('should create component', () =>{
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  })

  it('should auto generate ID during ngOnInit when (@Input id) is not assigned', () => {
    const component = fixture.componentInstance;
    fixture.detectChanges();
    console.log(component.id)
  })

  it('should NOT generate ID during ngOnInit when (@Input id) is assigned', () => {
    const component = fixture.componentInstance;
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

  it(`#${LikeWidgetComponent.prototype.like.name}
  should trigger (@Output liked) when called`, () => {
    const component = fixture.componentInstance;
    spyOn(component.liked, 'emit');
    fixture.detectChanges();
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
  })
})