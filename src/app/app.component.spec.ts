import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { IssuesComponent } from './views/issues/issues.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('my-app app is running!');
  });

  it('see issues button should change the url', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const button = fixture.debugElement.query(By.css('button.btn'))
    button.nativeElement.click()

    expect(window.location.href).toEqual('http://localhost:4200/issues')
  })

  // it('github api should return an array', () => {
  //   const fixture = TestBed.createComponent(IssuesComponent);

  //   expect()

  // })
});
